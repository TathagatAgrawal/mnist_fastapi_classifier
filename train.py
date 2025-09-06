import pickle
from keras.datasets import mnist
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split


# Load MNIST dataset using Keras (faster, cached)
(X_train_full, y_train_full), (X_test_full, y_test_full) = mnist.load_data()
# Flatten images to 1D arrays for sklearn
X = X_train_full.reshape(-1, 28 * 28)
y = y_train_full
X_test = X_test_full.reshape(-1, 28 * 28)
y_test = y_test_full
print("[INFO] Dataset loaded.")

# Define model
clf = RandomForestClassifier(n_jobs=-1)

# Train model
print("[INFO] Training model...")
clf.fit(X, y)
print("[INFO] Training complete.")

# Evaluate model
print("Test accuracy =", clf.score(X_test, y_test))

# Save model
with open("mnist_model.pkl", "wb") as f:
    pickle.dump(clf, f)
