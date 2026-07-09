import { useState } from "react";
import {
  Camera,
  MapPin,
  Send,
  Image as ImageIcon,
} from "lucide-react";

import Input from "../../components/common/Input";
import Select from "../../components/common/Select";
import TextArea from "../../components/common/TextArea";
import Button from "../../components/common/Button";
import MapPlaceholder from "../../components/dashboard/MapPlaceholder";
import Toast from "../../components/common/Toast";

const categories = [
  "Road Damage",
  "Garbage",
  "Water Supply",
  "Drainage",
  "Street Light",
  "Electricity",
  "Public Property",
  "Others",
];

const ReportIssue = () => {
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    location: "",
    description: "",
    latitude: "11.9416",
    longitude: "79.8083",
    image: null,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Toast.success(
      "Complaint submitted successfully."
    );

    console.log(formData);
  };

  return (
    <div className="space-y-8">
      {/* Heading */}

      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Report New Issue
        </h1>

        <p className="mt-2 text-gray-500">
          Report civic issues by uploading an image,
          selecting a category and providing the
          location.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-8 lg:grid-cols-3"
      >
        {/* Left Side */}

        <div className="space-y-6 rounded-3xl bg-white p-8 shadow-md dark:bg-gray-900 lg:col-span-2">
          <Input
            label="Issue Title"
            name="title"
            placeholder="Enter complaint title"
            value={formData.title}
            onChange={handleChange}
          />

          <Select
            label="Issue Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={categories.map((item) => ({
              label: item,
              value: item,
            }))}
          />

          <Input
            label="Location"
            name="location"
            placeholder="Enter issue location"
            value={formData.location}
            onChange={handleChange}
            icon={<MapPin size={18} />}
          />

          <TextArea
            label="Description"
            name="description"
            rows={6}
            placeholder="Describe the issue..."
            value={formData.description}
            onChange={handleChange}
          />

          {/* Upload */}

          <div>
            <label className="mb-3 block text-sm font-semibold">
              Upload Image
            </label>

            <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-emerald-300 p-8 transition hover:bg-emerald-50 dark:hover:bg-gray-800">
              <Camera
                size={45}
                className="mb-4 text-emerald-600"
              />

              <span className="font-medium">
                Click to upload image
              </span>

              <input
                type="file"
                accept="image/*"
                hidden
                onChange={handleImage}
              />
            </label>

            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-5 h-72 w-full rounded-2xl object-cover"
              />
            )}
          </div>

          <Button
            type="submit"
            className="w-full"
          >
            <Send size={18} />
            Submit Complaint
          </Button>
        </div>

        {/* Right Side */}

        <div className="space-y-6">
          <MapPlaceholder
            title="Complaint Location"
            location={
              formData.location ||
              "Select Location"
            }
            latitude={formData.latitude}
            longitude={formData.longitude}
          />

          <div className="rounded-3xl bg-white p-6 shadow-md dark:bg-gray-900">
            <div className="flex items-center gap-3">
              <ImageIcon
                className="text-emerald-600"
                size={28}
              />

              <h2 className="text-xl font-bold">
                AI Prediction
              </h2>
            </div>

            <p className="mt-4 text-gray-500">
              After uploading an image, the backend AI
              will automatically identify the issue
              category and confidence score.
            </p>

            <div className="mt-6 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-900/20">
              <p className="font-semibold">
                Predicted Category
              </p>

              <p className="mt-2 text-gray-500">
                Waiting for image...
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReportIssue;