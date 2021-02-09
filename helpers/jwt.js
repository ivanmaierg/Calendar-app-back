const jwt = require('jsonwebtoken');

const generateJWT = (uid, name) => new Promise((resolve, reject) => {
  const payload = { uid, name };
  jwt.sign(
    payload,
    process.env.SECRET_JWT_SEED,
    {
      expiresIn: '2h',
    },
    (err, token) => {
      if (err) {
        const error = new Error('No se pudo generar el token');
        reject(error);
      }
      resolve(token);
    },
  );
});

module.exports = {
  generateJWT,
};
