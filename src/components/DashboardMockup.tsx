
import { Badge } from "@/components/ui/badge";

const DashboardMockup = () => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/20 max-w-2xl w-full">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-white font-semibold text-lg">Security Dashboard</h3>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Sidebar */}
        <div className="space-y-2">
          <div className="text-white/70 text-sm font-medium mb-3">Navigation</div>
          <div className="space-y-1">
            <div className="text-white bg-security-purple/20 px-3 py-2 rounded text-sm">Feed</div>
            <div className="text-white/70 px-3 py-2 rounded text-sm hover:bg-white/10 cursor-pointer">My Work</div>
            <div className="text-white/70 px-3 py-2 rounded text-sm hover:bg-white/10 cursor-pointer">Issues</div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-security-purple/20 text-security-purple border-security-purple/30">SAST</Badge>
            <Badge className="bg-security-blue/20 text-security-blue border-security-blue/30">DAST</Badge>
            <Badge className="bg-security-purple/20 text-security-purple border-security-purple/30">SCA</Badge>
            <Badge className="bg-security-blue/20 text-security-blue border-security-blue/30">Secret Scanning</Badge>
          </div>

          {/* Issues Table */}
          <div className="space-y-2">
            <div className="grid grid-cols-4 gap-2 text-white/70 text-xs font-medium border-b border-white/10 pb-2">
              <div>Type</div>
              <div>Name</div>
              <div>Severity</div>
              <div>Status</div>
            </div>
            
            {/* Issue Rows */}
            <div className="space-y-2">
              <div className="grid grid-cols-4 gap-2 text-sm text-white/90 bg-white/5 p-2 rounded">
                <div>SQL Injection</div>
                <div>login.php</div>
                <div><Badge className="bg-red-500/20 text-red-400 text-xs">Critical</Badge></div>
                <div><Badge className="bg-orange-500/20 text-orange-400 text-xs">To Do</Badge></div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-sm text-white/90 bg-white/5 p-2 rounded">
                <div>XSS</div>
                <div>search.js</div>
                <div><Badge className="bg-orange-500/20 text-orange-400 text-xs">High</Badge></div>
                <div><Badge className="bg-blue-500/20 text-blue-400 text-xs">In Progress</Badge></div>
              </div>
              
              <div className="grid grid-cols-4 gap-2 text-sm text-white/90 bg-white/5 p-2 rounded">
                <div>Dependency</div>
                <div>package.json</div>
                <div><Badge className="bg-yellow-500/20 text-yellow-400 text-xs">Medium</Badge></div>
                <div><Badge className="bg-green-500/20 text-green-400 text-xs">Resolved</Badge></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMockup;
