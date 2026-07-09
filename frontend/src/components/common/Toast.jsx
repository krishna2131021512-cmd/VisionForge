import { toast } from "react-hot-toast";
import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  Info,
} from "lucide-react";

const baseStyle = {
  borderRadius: "14px",
  padding: "14px 18px",
  fontWeight: 500,
  boxShadow:
    "0 10px 25px rgba(0,0,0,0.15)",
};

const Toast = {
  success(message) {
    toast(message, {
      icon: <CheckCircle size={20} color="#16a34a" />,
      style: {
        ...baseStyle,
        background: "#ecfdf5",
        color: "#166534",
        border: "1px solid #bbf7d0",
      },
    });
  },

  error(message) {
    toast(message, {
      icon: <XCircle size={20} color="#dc2626" />,
      style: {
        ...baseStyle,
        background: "#fef2f2",
        color: "#991b1b",
        border: "1px solid #fecaca",
      },
    });
  },

  warning(message) {
    toast(message, {
      icon: (
        <AlertTriangle
          size={20}
          color="#d97706"
        />
      ),
      style: {
        ...baseStyle,
        background: "#fffbeb",
        color: "#92400e",
        border: "1px solid #fde68a",
      },
    });
  },

  info(message) {
    toast(message, {
      icon: <Info size={20} color="#2563eb" />,
      style: {
        ...baseStyle,
        background: "#eff6ff",
        color: "#1e40af",
        border: "1px solid #bfdbfe",
      },
    });
  },
};

export default Toast;