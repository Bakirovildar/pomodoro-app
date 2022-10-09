import React, {useEffect, useState} from 'react';
import './statisticgraphic.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../../../../store/store";
import {getTimes} from "../../../../../../helpers/getTimes";

export function StatisticGraphic() {
    const secondsWork: any = useSelector<RootState>(state => state.countWork)
    const dateTasks: any = useSelector<RootState>(state => state.dateWork)
    const dropdownNumber: any = useSelector<RootState>(state => state.dropdownNumber)

    const [numWeeks, setNumWeeks] = useState(0)
    const [weeks, setWeeks] = useState([])

    const [monday, setMonday] = useState(0)
    const [tuesday, setTuesday] = useState(0)
    const [wednesday, setWednesday] = useState(0)
    const [thursday, setThursday] = useState(0)
    const [friday, setFriday] = useState(0)
    const [saturday, setSaturday] = useState(0)
    const [sunday, setSunday] = useState(0)

    const [maxTime, setMaxTime] = useState(0)

    useEffect(() => {
        let dateWeeks: any = ''

        if (numWeeks === 0) {
            dateWeeks = localStorage.getItem('dateFirst')
        } else if (numWeeks === 1) {
            dateWeeks = localStorage.getItem('dateTwo')
        } else if (numWeeks === 2) {
            dateWeeks = localStorage.getItem('dateThree')
        }

        const arr = dateWeeks.split(',')

        const filteredArr: any = []
        dateTasks.map((i: any) => {
            arr.forEach((q: any) => {
                if (q === i.dateWork) {
                    filteredArr.push(i)
                }
            })
        })

        let countMonday:any = 0
        let countTuesday:any = 0
        let countWednesday:any = 0
        let countThursday:any = 0
        let countFriday:any = 0
        let countSaturday:any = 0
        let countSunday:any = 0

        filteredArr.forEach((i:any) => {
            if (i.dateWork.includes('Mon')) {
                countMonday += i.countWork
            } else if (i.dateWork.includes('Tue')) {
                countTuesday += i.countWork
            } else if (i.dateWork.includes('Wed')) {
                countWednesday += i.countWork
            } else if (i.dateWork.includes('Thu')) {
                countThursday += i.countWork
            } else if (i.dateWork.includes('Fri')) {
                countFriday += i.countWork
            } else if (i.dateWork.includes('Sat')) {
                countSaturday += i.countWork
            } else if (i.dateWork.includes('Sun')) {
                countSunday += i.countWork
            }
        })

        setMaxTime( Math.max(countMonday, countTuesday,countWednesday, countThursday, countFriday, countSaturday, countSunday))

        setWeeks(filteredArr)
        setMonday(countMonday)
        setTuesday(countTuesday)
        setWednesday(countWednesday)
        setThursday(countThursday)
        setFriday(countFriday)
        setSaturday(countSaturday)
        setSunday(countSunday)
        setNumWeeks(dropdownNumber)
    }, [dateTasks, numWeeks, dropdownNumber])

    const minutes = secondsWork / 60
    const quarter = minutes / 4
    const oneMinutes = getTimes(quarter)
    const twoMinutes = getTimes(quarter * 2)
    const threeMinutes = getTimes(quarter * 3)
    const fourMinutes = getTimes(quarter * 4)

    const oneHours = Math.floor(quarter / 60)
    const twoHours = Math.floor(quarter * 2 / 60)
    const threeHours = Math.floor(quarter * 3 / 60)
    const fourHours = Math.floor(quarter * 4 / 60)

    const days = [
        {name: 1, title: 'Пн', eng: 'Mon'},
        {name: 2, title: 'Вт', eng: 'Tue'},
        {name: 3, title: 'Ср', eng: 'Wed'},
        {name: 4, title: 'Чт', eng: 'Thu'},
        {name: 5, title: 'Пт', eng: 'Fri'},
        {name: 6, title: 'Сб', eng: 'Sat'},
        {name: 0, title: 'Вс', eng: 'Sun'},
    ]

    const nowDay = new Date().getDay()

    return (
        <div className='statistic-graphic-content'>

            <div className='statistic-graphic-line-container'>
                <div style={{width: '100%'}}
                >
                    <div className='statistic-graphic-line'/>
                    <div className='statistic-graphic-line'/>
                    <div className='statistic-graphic-line'/>
                    <div className='statistic-graphic-line'/>
                </div>
                <div className='statistic-graphic-hours'>
                    {
                        weeks.length
                        ? fourHours * 60 < 60
                            ? <div>{Math.floor(fourMinutes)} мин</div>
                            : fourHours === 0 ? <div>{0} ч</div> : <div>{fourHours} ч {Math.floor(fourMinutes)} мин</div>
                        : <div>{0} ч</div>
                    }
                    {
                        weeks.length
                        ? threeHours * 60 < 60
                             ? <div>{Math.floor(threeMinutes)} мин</div>
                             : threeHours === 0 ? <div>{0} ч</div> : <div>{threeHours} ч {Math.floor(threeMinutes)} мин</div>
                        : <div>{0} ч</div>
                    }
                    {
                        weeks.length
                            ? twoHours * 60 < 60
                                 ? <div>{Math.floor(twoMinutes)} мин</div>
                                 : twoHours === 0 ? <div>{0} ч</div> : <div>{twoHours} ч {Math.floor(twoMinutes)} мин</div>
                            : <div>{0} ч</div>
                    }
                    {
                        weeks.length
                            ? oneHours * 60 < 60
                                 ? <div>{Math.floor(oneMinutes)} мин</div>
                                 : oneHours === 0 ? <div>{0} ч</div> : <div>{oneHours} ч {oneMinutes} мин</div>
                            : <div>{0} ч</div>
                    }
                </div>
            </div>

            <div className='statistic-graphic-footer'>
                <div className='statistic-graphic-footer-content'>
                    {
                        days.map((i, idx) => <span className={nowDay === i.name ? 'nowDay' : 'notNowDay'}
                                                   key={idx}>{i.title}</span>)
                    }
                </div>
            </div>

            <div className='statistic-graphic-graph'>
                {
                    monday
                        ? <span className='statistic-graphic-graph-span' style={{width: '77px', background: '#EA8A79',height: `${monday * 100 / maxTime}%`}}/>
                        : <span className='statistic-graphic-graph-noStat'/>
                }{
                    tuesday
                        ? <span className='statistic-graphic-graph-span' style={{width: '77px', background: '#EA8A79',height: `${tuesday * 100 / maxTime}%`}}/>
                        : <span className='statistic-graphic-graph-noStat'/>
                }{
                    wednesday
                        ? <span className='statistic-graphic-graph-span' style={{width: '77px', background: '#EA8A79',height: `${wednesday * 100 / maxTime}%`}}/>
                        : <span className='statistic-graphic-graph-noStat'/>
                }{
                    thursday
                        ? <span className='statistic-graphic-graph-span' style={{width: '77px', background: '#EA8A79',height: `${thursday * 100 / maxTime}%`}}/>
                        : <span className='statistic-graphic-graph-noStat'/>
                }{
                    friday
                        ? <span className='statistic-graphic-graph-span' style={{width: '77px', background: '#EA8A79',height: `${friday * 100 / maxTime}%`}}/>
                        : <span className='statistic-graphic-graph-noStat'/>
                }{
                    saturday
                        ? <span className='statistic-graphic-graph-span' style={{width: '77px', background: '#EA8A79',height: `${saturday * 100 / maxTime}%`}}/>
                        : <span className='statistic-graphic-graph-noStat'/>
                }{
                    sunday
                        ? <span className='statistic-graphic-graph-span' style={{width: '77px', background: '#EA8A79',height: `${sunday * 100 / maxTime}%`}}/>
                        : <span className='statistic-graphic-graph-noStat'/>
                }
            </div>

        </div>
    );
}
