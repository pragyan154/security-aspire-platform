
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const DashboardMockup = () => {
  const [activeSection, setActiveSection] = useState("issues");

  const sampleData = {
    issues: [
      { id: 1, type: "Unsanitized input", name: "login.php", severity: "Critical", status: "To Do" },
      { id: 2, type: "json-schema", name: "search.js", severity: "Critical", status: "New" },
      { id: 3, type: "SVN Repo exposure", name: "package.json", severity: "High", status: "Test Open" },
      { id: 4, type: "MFA", name: "config.yaml", severity: "High", status: "Test Open" },
    ],
    signals: [
      { id: 1, type: "Anomaly Detection", name: "auth_service", severity: "Medium", status: "Active" },
      { id: 2, type: "Rate Limiting", name: "api_gateway", severity: "Low", status: "Monitoring" },
      { id: 3, type: "Data Breach", name: "user_db", severity: "Critical", status: "Alert" },
      { id: 4, type: "Suspicious Activity", name: "admin_panel", severity: "High", status: "Investigating" },
    ],
    repos: [
      { id: 1, type: "Public Repo", name: "frontend-app", severity: "Low", status: "Monitored" },
      { id: 2, type: "Private Repo", name: "backend-api", severity: "Medium", status: "Secure" },
      { id: 3, type: "Fork", name: "utils-library", severity: "Low", status: "Updated" },
      { id: 4, type: "Archive", name: "legacy-code", severity: "High", status: "Review Needed" },
    ]
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "bg-red-100 text-red-700 border-red-200";
      case "High": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Medium": return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Low": return "bg-green-100 text-green-700 border-green-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "To Do": return "bg-gray-100 text-gray-700 border-gray-200";
      case "New": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Test Open": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Active": return "bg-green-100 text-green-700 border-green-200";
      case "Alert": return "bg-red-100 text-red-700 border-red-200";
      case "Monitoring": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Investigating": return "bg-orange-100 text-orange-700 border-orange-200";
      case "Monitored": return "bg-blue-100 text-blue-700 border-blue-200";
      case "Secure": return "bg-green-100 text-green-700 border-green-200";
      case "Updated": return "bg-purple-100 text-purple-700 border-purple-200";
      case "Review Needed": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-6xl w-full overflow-hidden">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 bg-gray-50">
        <h3 className="text-gray-900 font-semibold text-base sm:text-lg">Security Dashboard</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Sidebar */}
        <div className="bg-gray-900 p-4 lg:w-48 xl:w-56">
          <div className="text-gray-400 text-sm font-medium mb-3">Navigation</div>
          <div className="space-y-1">
            <button
              onClick={() => setActiveSection("issues")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "issues" 
                  ? "text-white bg-security-purple" 
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Issues
            </button>
            <button
              onClick={() => setActiveSection("signals")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "signals" 
                  ? "text-white bg-security-purple" 
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Signals
            </button>
            <button
              onClick={() => setActiveSection("repos")}
              className={`w-full text-left px-3 py-2 rounded text-sm transition-colors ${
                activeSection === "repos" 
                  ? "text-white bg-security-purple" 
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Repos
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6 space-y-4 min-w-0">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200 text-xs">SAST</Badge>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200 text-xs">DAST</Badge>
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200 text-xs">SCA</Badge>
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200 text-xs">Secret Scanning</Badge>
            <Badge className="bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200 text-xs sm:block hidden">Malware detection</Badge>
          </div>

          {/* Data Table */}
          <div className="space-y-3 overflow-x-auto">
            <div className="grid grid-cols-4 gap-2 sm:gap-4 text-gray-600 text-xs font-semibold border-b border-gray-200 pb-2 min-w-0">
              <div className="truncate">Type</div>
              <div className="truncate">Name</div>
              <div className="truncate">Severity</div>
              <div className="truncate">Status</div>
            </div>
            
            {/* Data Rows */}
            <div className="space-y-2">
              {sampleData[activeSection as keyof typeof sampleData].map((item) => (
                <div key={item.id} className="grid grid-cols-4 gap-2 sm:gap-4 text-sm text-gray-900 hover:bg-gray-50 p-2 sm:p-3 rounded-lg border border-gray-100 min-w-0">
                  <div className="font-medium truncate" title={item.type}>{item.type}</div>
                  <div className="text-gray-600 truncate" title={item.name}>{item.name}</div>
                  <div className="min-w-0">
                    <Badge className={`text-xs border ${getSeverityColor(item.severity)} whitespace-nowrap`}>
                      {item.severity}
                    </Badge>
                  </div>
                  <div className="min-w-0">
                    <Badge className={`text-xs border ${getStatusColor(item.status)} whitespace-nowrap`}>
                      {item.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
