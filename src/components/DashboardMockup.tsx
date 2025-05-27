
import { Badge } from "@/components/ui/badge";

const DashboardMockup = () => {
  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 max-w-2xl w-full overflow-hidden">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
        <h3 className="text-gray-900 font-semibold text-lg">Security Dashboard</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {/* Sidebar */}
        <div className="bg-gray-900 p-4 space-y-2">
          <div className="text-gray-400 text-sm font-medium mb-3">Navigation</div>
          <div className="space-y-1">
            <div className="text-white bg-security-purple px-3 py-2 rounded text-sm">Feed</div>
            <div className="text-gray-400 px-3 py-2 rounded text-sm hover:bg-gray-800 cursor-pointer">My Work</div>
            <div className="text-gray-400 px-3 py-2 rounded text-sm hover:bg-gray-800 cursor-pointer">Issues</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 p-6 space-y-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-green-100 text-green-700 border-green-200 hover:bg-green-200">SAST</Badge>
            <Badge className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">DAST</Badge>
            <Badge className="bg-purple-100 text-purple-700 border-purple-200 hover:bg-purple-200">SCA</Badge>
            <Badge className="bg-orange-100 text-orange-700 border-orange-200 hover:bg-orange-200">Secret Scanning</Badge>
            <Badge className="bg-pink-100 text-pink-700 border-pink-200 hover:bg-pink-200">Malware detection</Badge>
          </div>

          {/* Issues Table */}
          <div className="space-y-3">
            <div className="grid grid-cols-4 gap-2 text-gray-600 text-xs font-semibold border-b border-gray-200 pb-2">
              <div>Type</div>
              <div>Name</div>
              <div>Severity</div>
              <div>Status</div>
            </div>
            
            {/* Issue Rows */}
            <div className="space-y-2">
              <div className="grid grid-cols-4 gap-2 text-sm text-gray-900 hover:bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="font-medium">Unsanitized input</div>
                <div className="text-gray-600">login.php</div>
                <div><Badge className="bg-red-100 text-red-700 text-xs border-red-200">Critical</Badge></div>
                <div><Badge className="bg-gray-100 text-gray-700 text-xs border-gray-200">To Do</Badge></div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-sm text-gray-900 hover:bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="font-medium">json-schema</div>
                <div className="text-gray-600">search.js</div>
                <div><Badge className="bg-red-100 text-red-700 text-xs border-red-200">Critical</Badge></div>
                <div><Badge className="bg-purple-100 text-purple-700 text-xs border-purple-200">New</Badge></div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-sm text-gray-900 hover:bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="font-medium">SVN Repo exposure</div>
                <div className="text-gray-600">package.json</div>
                <div><Badge className="bg-orange-100 text-orange-700 text-xs border-orange-200">High</Badge></div>
                <div><Badge className="bg-blue-100 text-blue-700 text-xs border-blue-200">Test Open</Badge></div>
              </div>

              <div className="grid grid-cols-4 gap-2 text-sm text-gray-900 hover:bg-gray-50 p-3 rounded-lg border border-gray-100">
                <div className="font-medium">MFA</div>
                <div className="text-gray-600">config.yaml</div>
                <div><Badge className="bg-orange-100 text-orange-700 text-xs border-orange-200">High</Badge></div>
                <div><Badge className="bg-blue-100 text-blue-700 text-xs border-blue-200">Test Open</Badge></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
