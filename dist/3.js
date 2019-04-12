(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{7:function(e,i,s){"use strict";s.r(i);css`
    display: flex;
    flex-direction: column;
    color: #fff;
    overflow-x: auto;
  `,css`
    margin: 0 auto;
    flex: 1 1 100%;
    padding: 4rem;
    display: flex;
    align-items: flex-end;
  `;const a=css`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
  `,t=css`
    display: flex;
    align-items: flex-end;
    background: rgba(0, 0, 0, 0.1);
    height: 100%;
    border-radius: 5px;
    overflow: hidden;
  `,n=css`
    width: 3rem;
    margin-top: 1rem;
    text-align: center;
    font-weight: 100;
    color: rgba(255, 255, 255, 0.5);
  `;css`
    position: sticky;
    left: 0;
    width: 100%;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-weight: 200;
    padding: 0 0 3rem;
  `;i.default=(({tests:e})=>html`
  <aside className="graph">
    ${e.map((e=>(i,s)=>{const r=Math.max(...e.map(e=>e.median)),d=i.median?i.median/r*100:0;return html`
    <div className=${a}>
      <div className=${t}>
        <span
          style=${{width:"3px",transition:"height 0.3s",height:`${i.error?100:d}%`,background:i.error?"crimson":"rgba(255,255,255,0.4)"}}
        ></span>
      </div>
      <div className=${n}>
        ${d.toFixed(0)}%
      </div>
    </div>
  `})(e))}
  </aside>
`)}}]);