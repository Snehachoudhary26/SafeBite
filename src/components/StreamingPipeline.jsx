import React, { useState, useEffect } from 'react';
import { initialKafkaStream, sparkBatchMetrics, cityRiskHotspots } from '../data/streamingData';
import { Activity, Radio, Cpu, Database, MapPin, Zap } from 'lucide-react';

export default function StreamingPipeline() {
  const [streamEvents, setStreamEvents] = useState(initialKafkaStream);
  const [liveThroughput, setLiveThroughput] = useState(18400);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomTpc = (Math.random() * 20 + 12).toFixed(1);
      const isAlert = parseFloat(randomTpc) > 25.0;
      const newEvent = {
        id: `EVT-${Math.floor(Math.random() * 9000 + 1000)}`,
        timestamp: new Date().toLocaleTimeString(),
        source: isAlert ? "IoT-Fryer-Sensor-Alert" : "IoT-Telemetry-Stream",
        metric: `TPC: ${randomTpc}%`,
        temp: `${Math.floor(Math.random() * 40 + 160)}°C`,
        status: isAlert ? "ALERT" : "NORMAL",
        zone: ["Connaught Place, Delhi", "T. Nagar, Chennai", "Sector 18, Noida", "Koramangala, Bengaluru"][Math.floor(Math.random() * 4)]
      };

      setStreamEvents((prev) => [newEvent, ...prev.slice(0, 7)]);
      setLiveThroughput(Math.floor(Math.random() * 2000 + 17500));
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-xl sm:text-2xl font-extrabold text-white flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-cobalt-600/15 text-cobalt-400 border border-cobalt-500/25">⚡</span>
          Real-Time Streaming (Kafka) & Big Data (Spark) Layer
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          High-throughput event bus ingesting fryer IoT telemetry, citizen photo uploads, and wholesale mandi commodity price shocks.
        </p>
      </div>

      {/* 4 Telemetry Metrics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="cap-card p-4 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Kafka Ingestion</span>
            <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white mt-1">{liveThroughput.toLocaleString()}</div>
          <div className="text-[10px] text-emerald-400 mt-0.5">Events / Sec (Zero packet loss)</div>
        </div>

        <div className="cap-card p-4 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Active IoT Sensors</span>
            <Cpu className="w-4 h-4 text-cobalt-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-white mt-1">{sparkBatchMetrics.activeSensorsOnline}</div>
          <div className="text-[10px] text-cobalt-400 mt-0.5">Connected commercial fryers</div>
        </div>

        <div className="cap-card p-4 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>RUCO Diverted Oil</span>
            <Zap className="w-4 h-4 text-amberGold-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-amberGold-400 mt-1">{sparkBatchMetrics.rucoOilDivertedLiters}</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Converted into clean Biodiesel</div>
        </div>

        <div className="cap-card p-4 rounded-xl">
          <div className="flex items-center justify-between text-slate-400 text-xs">
            <span>Spark Latency</span>
            <Database className="w-4 h-4 text-purple-400" />
          </div>
          <div className="text-xl sm:text-2xl font-black text-purple-400 mt-1">{sparkBatchMetrics.latencyMs}</div>
          <div className="text-[10px] text-slate-400 mt-0.5">Rolling window graph computation</div>
        </div>
      </div>

      {/* Table + City Hotspots */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 cap-panel p-5 rounded-2xl flex flex-col">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <h3 className="font-bold text-white text-sm">Live Kafka Event Stream (`fssai.sensor.telemetry`)</h3>
            </div>
            <span className="text-[11px] font-mono text-slate-400">Stream Buffer: Live</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="text-slate-400 border-b border-slate-800">
                  <th className="pb-2 font-medium">Event ID</th>
                  <th className="pb-2 font-medium">Time</th>
                  <th className="pb-2 font-medium">Source</th>
                  <th className="pb-2 font-medium">Metric</th>
                  <th className="pb-2 font-medium">Zone</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {streamEvents.map((evt) => (
                  <tr key={evt.id} className="hover:bg-slate-900/60 transition-colors font-mono">
                    <td className="py-2.5 text-slate-400">{evt.id}</td>
                    <td className="py-2.5 text-slate-300">{evt.timestamp}</td>
                    <td className="py-2.5 text-slate-200">{evt.source}</td>
                    <td className="py-2.5 font-bold text-white">{evt.metric}</td>
                    <td className="py-2.5 text-slate-300">{evt.zone}</td>
                    <td className="py-2.5">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                          evt.status === 'ALERT'
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            : evt.status === 'RISK_SURGE'
                            ? 'bg-amberGold-500/20 text-amberGold-300 border border-amberGold-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {evt.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* City Hotspots */}
        <div className="cap-panel p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="font-bold text-white text-sm flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-400" />
              Big Data City Risk Map
            </h3>
            <span className="text-xs text-slate-400">Spark Aggregate</span>
          </div>

          <div className="space-y-3">
            {cityRiskHotspots.map((item, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slateDark-900 border border-slate-800 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white text-xs">{item.city}</span>
                  <span
                    className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      item.riskLevel === 'HIGH'
                        ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                        : 'bg-amberGold-500/20 text-amberGold-300 border border-amberGold-500/30'
                    }`}
                  >
                    {item.riskLevel} RISK
                  </span>
                </div>
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-500">Clusters:</span> {item.hotspots}
                </div>
                <div className="text-[11px] text-rose-300/90 font-medium">
                  <span className="text-slate-500">Top Violation:</span> {item.topViolations}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
