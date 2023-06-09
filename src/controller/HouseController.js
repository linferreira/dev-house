class HouseController {
  async store(req, res) {
    return res.json(req.body);
  }
}

export default new HouseController();
