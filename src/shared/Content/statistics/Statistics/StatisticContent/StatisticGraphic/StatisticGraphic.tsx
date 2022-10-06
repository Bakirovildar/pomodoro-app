import React from 'react';
import './statisticgraphic.css';
import {useSelector} from "react-redux";
import {RootState} from "../../../../../../store/store";
import {getTimes} from "../../../../../../helpers/getTimes";

export function StatisticGraphic() {
    const secondsWork: any = useSelector<RootState>(state => state.countWork)

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
        {name: 1, title: 'Пн'},
        {name: 2, title: 'Вт'},
        {name: 3, title: 'Ср'},
        {name: 4, title: 'Чт'},
        {name: 5, title: 'Пт'},
        {name: 6, title: 'Сб'},
        {name: 7, title: 'Вс'},
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
                        fourHours * 60 < 60
                            ? <div>{Math.floor(fourMinutes)} мин</div>
                            : fourHours === 0 ? <div>{0} ч</div> :
                            <div>{fourHours} ч {Math.floor(fourMinutes)} мин</div>
                    }
                    {
                        threeHours * 60 < 60
                            ? <div>{Math.floor(threeMinutes)} мин</div>
                            : threeHours === 0 ? <div>{0} ч</div> :
                            <div>{threeHours} ч {Math.floor(threeMinutes)} мин</div>
                    }
                    {
                        twoHours * 60 < 60
                            ? <div>{Math.floor(twoMinutes)} мин</div>
                            : twoHours === 0 ? <div>{0} ч</div> : <div>{twoHours} ч {Math.floor(twoMinutes)} мин</div>
                    }
                    {
                        oneHours * 60 < 60
                            ? <div>{Math.floor(oneMinutes)} мин</div>
                            : oneHours === 0 ? <div>{0} ч</div> : <div>{oneHours} ч {oneMinutes} мин</div>
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
                <span className='statistic-graphic-graph-span'/>
                <span className='statistic-graphic-graph-nowDay'/>
                <span className='statistic-graphic-graph-span'/>
                <span className='statistic-graphic-graph-span'/>
                <span className='statistic-graphic-graph-span'/>
                <span className='statistic-graphic-graph-noStat'/>
                <span className='statistic-graphic-graph-noStat'/>
            </div>

        </div>
    );
}
