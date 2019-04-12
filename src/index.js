import htm from 'htm'
import csz from 'csz'
import { React, ReactDOM } from 'es-react-production'
import './index.css'

window.React = React
window.css = csz
window.html = htm.bind(React.createElement)

const Fallback = html`
  <div></div>
`
const Route = {
  '/': React.lazy(() => import('./routes/home/index.js')),
  '*': React.lazy(() => import('./routes/notfound/index.js')),
}

ReactDOM.render(
  html`
    <${React.Suspense} fallback=${Fallback}>
      <${Route[location.pathname] || Route['*']} />
    <//>
  `,
  document.body
)
