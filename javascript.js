const FNLB = require('fnlb');

module.exports = async (req, res) => {
  // Ensure that the request method is POST
  if (req.method === 'POST') {
    try {
      // Initialize FNLB
      const fnlb = new FNLB();

      // Start 20 bots (2 shards, 10 bots per shard)
      await fnlb.start({
        apiToken: 'DGfCBefvjOU-UORpSFBh8gbArVEGkKK5xb-BB7kZk8NfEFj6hiCf8v2Nefu6',  // Replace with your FNLB API token
        numberOfShards: 2,
        botsPerShard: 10
      });

      // Send success response as JSON
      res.status(200).json({ message: 'Bots started successfully!' });

    } catch (error) {
      // Log the error for debugging (optional)
      console.error('Error starting bots:', error);

      // Send error response as JSON with details
      res.status(500).json({ error: 'Failed to start bots', details: error.message });
    }
  } else {
    // Handle unsupported methods (only POST is allowed)
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};
