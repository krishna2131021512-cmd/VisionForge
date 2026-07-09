import React from "react";
import {
  MapPin,
  Navigation,
  Maximize2,
  LocateFixed,
} from "lucide-react";

const MapPlaceholder = ({
  title = "Location Map",
  location = "Puducherry, India",
  latitude = "11.9416",
  longitude = "79.8083",
  height = "450px",
  onOpenMap = () => {},
  onLocate = () => {},
}) => {
  return (
    <div
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-md dark:border-gray-800 dark:bg-gray-900"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
        <div>
          <h2 className="text-xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>

          <p className="mt-1 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <MapPin size={16} />
            {location}
          </p>
        </div>

        <button
          onClick={onOpenMap}
          className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
        >
          Open Map
        </button>
      </div>

      {/* Map */}
      <div
        className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-blue-50 to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
        style={{ height }}
      >
        {/* Grid */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(#d1d5db 1px, transparent 1px),
                linear-gradient(90deg, #d1d5db 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Roads */}
        <div className="absolute h-1 w-4/5 rotate-12 rounded-full bg-white/50"></div>
        <div className="absolute h-1 w-3/4 -rotate-12 rounded-full bg-white/50"></div>
        <div className="absolute h-3/4 w-1 rounded-full bg-white/50"></div>

        {/* Location Marker */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="animate-bounce rounded-full bg-red-500 p-4 shadow-2xl">
            <MapPin size={40} className="text-white" />
          </div>

          <div className="mt-5 rounded-2xl bg-white px-5 py-3 shadow-xl dark:bg-gray-800">
            <h3 className="font-bold text-gray-800 dark:text-white">
              Complaint Location
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              {location}
            </p>

            <p className="mt-2 text-xs text-gray-400">
              Lat: {latitude} | Lng: {longitude}
            </p>
          </div>
        </div>

        {/* Top Right Controls */}
        <div className="absolute right-5 top-5 flex flex-col gap-3">
          <button
            onClick={onLocate}
            className="rounded-xl bg-white p-3 shadow-lg transition hover:bg-emerald-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <LocateFixed
              size={20}
              className="text-emerald-600"
            />
          </button>

          <button
            onClick={onOpenMap}
            className="rounded-xl bg-white p-3 shadow-lg transition hover:bg-emerald-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Navigation
              size={20}
              className="text-blue-600"
            />
          </button>

          <button
            onClick={onOpenMap}
            className="rounded-xl bg-white p-3 shadow-lg transition hover:bg-emerald-100 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Maximize2
              size={20}
              className="text-gray-700 dark:text-white"
            />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-800 dark:bg-gray-800">
        <div>
          <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            GPS Coordinates
          </p>

          <p className="text-xs text-gray-500">
            {latitude}, {longitude}
          </p>
        </div>

        <button
          onClick={onOpenMap}
          className="rounded-xl border border-emerald-600 px-4 py-2 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-600 hover:text-white"
        >
          View on Google Maps
        </button>
      </div>
    </div>
  );
};

export default MapPlaceholder;