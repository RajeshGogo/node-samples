/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// [START slides_refresh_sheets_chart]
/**
 * Refreshes an embedded sheet chart.
 * @param {string} presentationId The presentation ID.
 * @param {string} presentationChartId The presentation's chart ID.
 */
async function refreshSheetsChart(presentationId, presentationChartId) {
  const {GoogleAuth} = require('google-auth-library');
  const {google} = require('googleapis');

  const auth = new GoogleAuth(
      {scopes: 'https://www.googleapis.com/auth/presentations'});

  const service = google.slides({version: 'v1', auth});

  const requests = [{
    refreshSheetsChart: {
      objectId: presentationChartId,
    },
  }];

  // Execute the request.
  try {
    const batchUpdateResponse = await service.presentations.batchUpdate({
      presentationId,
      resource: {
        requests,
      },
    });
    console.log(`Refreshed a linked Sheets chart with ID: ${presentationChartId}`);
    return batchUpdateResponse.data;
  } catch (err) {
    // TODO (developer) - Handle exception
    throw err;
  }
}
// [END slides_refresh_sheets_chart]

module.exports = {refreshSheetsChart};
