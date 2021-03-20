import React, { FC } from 'react'
import { render } from 'react-dom'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Layout } from './components'
import { Homepage } from './screens'
import './styles/app.less'

const App: FC = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>
    </Layout>
  </BrowserRouter>
)

render(<App />, document.getElementById('app'))
