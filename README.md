# MNIST FastAPI Classifier

This project is a simple image classifier for handwritten digits (MNIST dataset) built with FastAPI and Python. It allows users to train a model, serve predictions via an API, and test the classifier using sample images.

## Features

- Train a neural network on the MNIST dataset
- Serve predictions using FastAPI
- Test predictions on sample images

## Project Structure

```
index.html           # Web interface (if any)
index.js             # Frontend JS (if any)
main.py              # FastAPI server
train.py             # Model training script
requirements.txt     # Python dependencies
LICENSE              # License file
README.md            # Project documentation
test_images/         # Sample images for testing
```

## Getting Started

### 1. Install Dependencies

```powershell
pip install -r requirements.txt
```

### 2. Train the Model

```powershell
python train.py
```

### 3. Run the FastAPI Server

```powershell
python main.py
```

The API will be available at `http://localhost:8000` (default).

### 4. Test the Classifier

Use the images in the `test_images/` folder to test predictions via the API or web interface.

## API Endpoints

- `/predict-image/`: Predict the digit from an uploaded image

## License

This project is licensed under the terms of the LICENSE file.
