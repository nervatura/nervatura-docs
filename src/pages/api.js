import React from 'react';
import Layout from '@theme/Layout';
import SwaggerUI from "swagger-ui-react"

import 'swagger-ui-react/swagger-ui.css'
import openapi from '../config/openapi.json'
import { conf } from '../config/conf'

function ApiPage() {
  return (
    <Layout>
      <main>
        <SwaggerUI spec={openapi} docExpansion={conf.api_expansion} />
      </main>
    </Layout>
  )
}

export default ApiPage;