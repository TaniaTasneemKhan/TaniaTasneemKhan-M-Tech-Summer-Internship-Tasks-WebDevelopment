import Fish from "../models/Fish.js";

// GET all fish
export const getAllFish = async (req, res) => {
  try {
    const fish = await Fish.find();

    res.status(200).json(fish);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// GET single fish
export const getFishById = async (req, res) => {
  try {
    const fish = await Fish.findById(req.params.id);

    if (!fish) {
      return res.status(404).json({
        message: "Fish not found",
      });
    }

    res.status(200).json(fish);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// CREATE fish
export const createFish = async (req, res) => {
  try {
    const fish = await Fish.create(req.body);

    res.status(201).json(fish);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// UPDATE fish
export const updateFish = async (req, res) => {
  try {
    const fish = await Fish.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    if (!fish) {
      return res.status(404).json({
        message: "Fish not found",
      });
    }

    res.status(200).json(fish);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// DELETE fish
export const deleteFish = async (req, res) => {
  try {
    const fish = await Fish.findByIdAndDelete(req.params.id);

    if (!fish) {
      return res.status(404).json({
        message: "Fish not found",
      });
    }

    res.status(200).json({
      message: "Fish deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};