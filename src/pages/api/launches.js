const { client } = require('../../lib/client')
const { launchesQuery } = require('../../requests')

export default async (req, res) => {
  const data = await client
    .request(launchesQuery)
    .catch(err => alert(`Error! - ${err}`))

  res.status(200).send(data)
}
