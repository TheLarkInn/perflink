(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{4:function(e,t,s){},9:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _index_css__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4),_index_css__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);const Tests=React.lazy(()=>__webpack_require__.e(1).then(__webpack_require__.bind(null,8))),Results=React.lazy(()=>__webpack_require__.e(3).then(__webpack_require__.bind(null,7))),median=e=>e.sort()[Math.ceil(e.length/2)],init=()=>location.hash?{started:!0,dialog:!1,before:atob(location.hash.slice(1).split("/")[0]),tests:JSON.parse(atob(location.hash.slice(1).split("/")[1]))}:{started:!1,dialog:!0,before:"const data = [...Array(10000).keys()]",tests:[{code:""},{code:"data.find(x => x == 5000)"},{code:"data.find(x => x == 10000)"}]};__webpack_exports__.default=(()=>{const[before,setBefore]=React.useState(init().before),[started,setStarted]=React.useState(init().started),[tests,setTests]=React.useState(init().tests),[dialog,setDialog]=React.useState(init().dialog);return React.useEffect(()=>{if(started){navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)&&alert("Safari does not provide high enough resolution timers to support benchmarking. Please try another browser.");const iterations=100,results=tests.map(test=>{const times=[];try{let done=iterations;for(;done>0;){let time;time=eval(`() => {\n              ${before};\n              let start, end;\n              start = performance.now();\n              ${test.code};\n              end = performance.now();\n              return end - start;\n            }`)(),times.push(time),done--}return{...test,error:!1,median:median(times)}}catch(e){return{...test,error:!0,median:0}}});history.replaceState(null,null,`#${btoa(before)}/${btoa(JSON.stringify(results))}`),setTests(results),setStarted(!1)}},[started]),console.log(dialog),html`
    <main className="app">
      ${!dialog&&html`
          <${React.Suspense} fallback="Loading...">
            <${Tests}
              before=${before}
              setBefore=${setBefore}
              tests=${tests}
              setTests=${setTests}
              started=${started}
              setStarted=${setStarted}
            />
          <//>
          <${React.Suspense} fallback="Loading...">
            <${Results} tests=${tests} />
          <//>
        `}
      ${dialog&&html`
          <dialog open>
            <h1><i>Perflink</i></h1>
            <h2 class="lite">Lite</h2>
            <h3>Live Javascript Benchmarking</h3>
            <p>
              Write scripts and race them. See results graphed out as you type.
              Share your findings via URL.
            </p>
            <button
              onClick=${e=>{setDialog(!1),setStarted(!0)}}
            >
              Start Experimenting
            </button>
          </dialog>
        `}
    </main>
  `})}},0,[1,3]]);