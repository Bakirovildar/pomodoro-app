import React from 'react';
import './statisticfooter.css';
import {IconFocus} from "../../../../../../icons/IconFocus";
import {IconTimePause} from "../../../../../../icons/IconTimePause";
import {IconStopTime} from "../../../../../../icons/IconStopTime";
import {useSelector} from "react-redux";
import {RootState} from "../../../../../../store/store";

export function StatisticFooter() {
    const countStop: any = useSelector<RootState>(state => state.countStop)

    return (
        <div className='statistic-footer'>
            <div className='statistic-footer-card'>
                <div className='statistic-footer-card-left'>
                    <span>Фокус</span>
                    <div>35%</div>
                </div>
                <IconFocus/>
            </div>
            <div style={{marginRight: '32px'}}/>
            <div className='statistic-footer-card-2'>
                <div className='statistic-footer-card-left'>
                    <span>Время на паузе</span>
                    <div>9м</div>
                </div>
                <IconTimePause/>
            </div>
            <div style={{marginRight: '32px'}}/>
            <div className='statistic-footer-card-3'>
                <div className='statistic-footer-card-left'>
                    <span>Остановки</span>
                    <div>{countStop}</div>
                </div>
                <IconStopTime/>
            </div>
        </div>
    );
}
