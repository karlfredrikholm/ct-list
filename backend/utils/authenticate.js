export const authenticateUser = async (req, res, next) => {
    const accessToken = req.header('Authorization');
    try {
      const user = await User.findOne({ accessToken: accessToken });
      if (user) {
        next();
      } else {
        res.status(401).json({
          response: 'Please log in.',
          success: false,
        });
      }
    } catch (err) {
      res.status(400).json({
        response: err,
        success: false,
      });
    }
  };