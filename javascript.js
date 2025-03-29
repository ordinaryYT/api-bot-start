// /api/startBots.js
const FNLB = require('fnlb');

module.exports = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const fnlb = new FNLB();

      // Start 20 bots (2 shards, 10 bots per shard)
      await fnlb.start({
        apiToken: 'DGfCBefvjOU-UORpSFBh8gbArVEGkKK5xb-BB7kZk8NfEFj6hiCf8v2Nefu6',  // Replace with your FNLB API token
        numberOfShards: 2,
        botsPerShard: 10
      });

      res.status(200).json({ message: 'Bots started successfully!' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to start bots: ' + error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
