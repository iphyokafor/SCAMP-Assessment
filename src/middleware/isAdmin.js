const isAdmin = (req, res, next) => {
  if (req.user.role !== 'Admin'){
    return res.status(401).json({
      status: 401,
      message: 'you are not an Admin'
    })
  }
 return next()
}

export default isAdmin;