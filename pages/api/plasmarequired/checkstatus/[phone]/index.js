import dbConnect from "../../../../../utils/dbConnect";
import PlasmaReq from "../../../../../models/plasmareq";

const handler = async (req, res) => {
  const { method } = req;
  await dbConnect();
  switch (method) {
    case "GET":
      let { phone } = req.query;
      try {
        const count = await PlasmaReq.countDocuments({ phone });
        res.status(200).json({ success: true, count });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default handler;
