import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <div class="error-page">
      <div class="error-page__container _container"
      ><div class="error-page__description">
          <h1 class="header">404: Not Found</h1>
          <p class="desc">You just hit a route that doesn't exist... the sadness.</p>
        </div>
        <div class="error-page__smiley">
          <p class="text">:(</p>
        </div>
      </div>
    </div>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
