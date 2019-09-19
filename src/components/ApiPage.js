import React from 'react';

import SwaggerUI from "swagger-ui-react"

import openapi from '../config/data/openapi.json'
import { conf } from '../config/data/conf'

function ApiPage() {
  return <SwaggerUI spec={openapi} docExpansion={conf.api_expansion} />
}

export default ApiPage;