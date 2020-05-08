const isSalesPerson = (req, res, next) => {
  if (req.user.role !== 'SalesPerson'){
    return res.status(401).json({
      status: 401,
      message: 'you are not a SalesPerson'
    })
  }
 return next()
}

export default isSalesPerson;