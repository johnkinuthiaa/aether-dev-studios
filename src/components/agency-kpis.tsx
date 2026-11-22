"use client"

import * as React from "react"
import { PeakChart } from "@/components/ui/peak-chart"
import { TrendingUp, Activity, Cpu } from "lucide-react"

// KPI Metric Data for Agency Client Discovery & Scale
const ADS_DISCOVERY_SERIES: Record<string, { data: number[]; labels: string[]; value: number; suffix: string; caption: string }> = {
  Weekly: {
    data: [14.2, 18.5, 21.0, 24.8, 32.1, 44.5, 48.6],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    value: 48.6,
    suffix: "M",
    caption: "Weekly Ad Discovery Impressions",
  },
  Monthly: {
    data: [12.4, 15.8, 19.2, 22.5, 27.0, 31.2, 38.4, 45.1, 52.6, 61.3, 72.0, 84.6],
    labels: ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"],
    value: 84.6,
    suffix: "M",
    caption: "Cumulative Impressions Across Ads",
  },
  Yearly: {
    data: [42, 65, 98, 140, 210, 320, 480, 650, 810, 990, 1150, 1420],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    value: 1.4,
    suffix: "B",
    caption: "Annual Cross-Platform Reach",
  },
}

const CONVERSION_SERIES: Record<string, { data: number[]; labels: string[]; value: number; suffix: string; caption: string }> = {
  Weekly: {
    data: [120, 145, 160, 210, 280, 320, 384],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    value: 384,
    suffix: "%",
    caption: "Conversion Lift vs Baseline",
  },
  Monthly: {
    data: [90, 110, 130, 160, 190, 240, 290, 310, 340, 360, 375, 412],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    value: 412,
    suffix: "%",
    caption: "Continuous Web/App CRO Lift",
  },
  Yearly: {
    data: [150, 190, 230, 290, 350, 420, 480, 510, 560, 600, 640, 690],
    labels: ["2021", "2022", "2023", "2024", "2025", "2026"],
    value: 690,
    suffix: "%",
    caption: "Multi-Year Compounded ROI",
  },
}

const API_SYSTEMS_SERIES: Record<string, { data: number[]; labels: string[]; value: number; suffix: string; caption: string }> = {
  Weekly: {
    data: [8.4, 9.1, 10.2, 11.0, 11.8, 12.4, 12.8],
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    value: 12.8,
    suffix: "M",
    caption: "Throughput: 14ms p99 Latency",
  },
  Monthly: {
    data: [18, 22, 27, 34, 42, 53, 67, 82, 98, 115, 132, 156],
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    value: 156,
    suffix: "M",
    caption: "99.995% Uptime on Kafka Clusters",
  },
  Yearly: {
    data: [120, 240, 450, 780, 1200, 1850],
    labels: ["2021", "2022", "2023", "2024", "2025", "2026"],
    value: 1.85,
    suffix: "B",
    caption: "Total High-Throughput API Invocations",
  },
}

export function AgencyKpiSection() {
  const [adsPeriod, setAdsPeriod] = React.useState("Monthly")
  const [convPeriod, setConvPeriod] = React.useState("Weekly")
  const [apiPeriod, setApiPeriod] = React.useState("Weekly")

  const adsData = ADS_DISCOVERY_SERIES[adsPeriod]
  const convData = CONVERSION_SERIES[convPeriod]
  const apiData = API_SYSTEMS_SERIES[apiPeriod]

  return (
    <section className="shell section py-12" id="kpis" data-reveal>
      <div className="section-heading mb-8! gap-4">
          
        <h2 className="font-sans tracking-tighter">
          Measurable scale across discovery, conversions,<br/> web apps and distributed systems
        </h2>
        <p className="text-muted-foreground text-base max-w-2xl mt-4!">
          Real-time KPI benchmarks from our client deployments - tracking audience discovery across Google, Meta, and TikTok, high-velocity conversion optimization,web applications and high-throughput backend APIs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {/* KPI 1: Ad Discovery & Audience Reach */}
        <div className="flex flex-col items-center w-full p-4 rounded-3xl bg-[#08101a] border border-blue-900/30 shadow-2xl relative group hover:border-blue-500/40 transition-all">
          <div className="w-full flex items-center justify-between pb-3 px-2 border-b border-white/5 text-xs text-white">
            <span className="flex items-center gap-1.5 font-medium">
              <TrendingUp className="w-4 h-4 text-white" />
              Ads Discovery & Reach
            </span>
            <span className="text-[11px] px-2 py-0.5 rounded bg-sky-500/20 text-white font-mono">
              Google • Meta • TikTok
            </span>
          </div>

          <div className="w-full flex justify-center py-2">
            <PeakChart
              width={320}
              accent="#38bdf8"
              data={adsData.data}
              labels={adsData.labels}
              value={adsData.value}
              valueSuffix={adsData.suffix}
              decimals={adsPeriod === "Yearly" ? 1 : 1}
              title="Ad Discovery Reach"
              caption={adsData.caption}
              updatedText="CAPI Verified"
              period={adsPeriod}
              onPeriodChange={setAdsPeriod}
              formatValue={(v) => `${v.toFixed(1)}${adsData.suffix}`}
            />
          </div>
        </div>

        {/* KPI 2: Conversion Rate Optimization  max-w-[380px] */}
        
        <div className="flex flex-col items-center w-full p-4 rounded-3xl bg-[#08101a] border border-emerald-900/30 shadow-2xl relative group hover:border-emerald-500/40 transition-all">
          <div className="w-full flex items-center justify-between pb-3 px-2 border-b border-white/5 text-xs text-white">
            <span className="flex items-center gap-1.5 font-medium">
              <Activity className="w-4 h-4 text-white" />
              Web & App conversion
            </span>
            
          </div>

          <div className="w-full flex justify-center py-2">
            <PeakChart
              width={320}
              accent="#2ec99a"
              data={convData.data}
              labels={convData.labels}
              value={convData.value}
              valueSuffix={convData.suffix}
              decimals={0}
              title="Conversion Rate Lift"
              caption={convData.caption}
              updatedText="CRO Engine"
              period={convPeriod}
              onPeriodChange={setConvPeriod}
              formatValue={(v) => `+${Math.round(v)}%`}
            />
          </div>
        </div>

        {/* KPI 3: Distributed Systems & High-Throughput APIs */}
        <div className="flex flex-col items-center w-full max-w-[380px] p-4 rounded-3xl bg-[#08101a] border border-purple-900/30 shadow-2xl relative group hover:border-purple-500/40 transition-all">
          <div className="w-full flex items-center justify-between pb-3 px-2 border-b border-white/5 text-xs text-white">
            <span className="flex items-center gap-1.5 font-medium">
              <Cpu className="w-4 h-4 text-white" />
              Distributed API Traffic
            </span>
            
          </div>

          <div className="w-full flex justify-center py-2">
            <PeakChart
              width={320}
              accent="#5E4A2D"
              data={apiData.data}
              labels={apiData.labels}
              value={apiData.value}
              valueSuffix={apiData.suffix}
              decimals={apiPeriod === "Yearly" ? 2 : 1}
              title="High-Throughput APIs"
              caption={apiData.caption}
              updatedText="Edge Live"
              period={apiPeriod}
              onPeriodChange={setApiPeriod}
              formatValue={(v) => `${v.toFixed(1)}${apiData.suffix} req`}
            />
          </div>
        </div>
      </div>

      
    </section>
  )
}

export default AgencyKpiSection
