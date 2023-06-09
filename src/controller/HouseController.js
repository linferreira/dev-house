import House from "../models/House";

class HouseController {
  async store(req, res) {
    const { filename } = req.file;
    const { ...data } = req.body;
    const { user_id } = req.headers;

    const house = await House.create({
      user: user_id,
      thumbnail: filename,
      ...data,
    });

    return res.json(house);
  }
}

export default new HouseController();
