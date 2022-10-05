import React, {useEffect} from 'react';
import './statisticgraphic.css';

export function StatisticGraphic() {
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
                  <div>1 час 40 мин</div>
                  <div>1 час 15 мин</div>
                  <div>50 мин</div>
                  <div>25 мин</div>
              </div>
          </div>

          <div className='statistic-graphic-footer'>
              <div className='statistic-graphic-footer-content'>
                  {
                      days.map((i, idx) => <span className={nowDay === i.name ? 'nowDay' : 'notNowDay'} key={idx}>{i.title}</span>)
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
