"use client"

import { FeatureUIRow, ChecklistVisual, TimelineVisual } from "@/components/ui/feature-ui-row"

export default function FeatureUIRowDemo() {
  return (
    <div className="w-full bg-white font-sans">
      <div className="mx-auto flex max-w-[1312px] flex-col gap-24 px-6 py-20 md:px-10 md:py-24">
        <FeatureUIRow
          eyebrow="For companies"
          title="Hire abroad with confidence"
          body="A partner runs your hiring plan from the first conversation to the first day, and keeps every check up to date."
          cta={{ label: "Explore company services", href: "#" }}
          visual={
            <ChecklistVisual
              title="New hire, relocation file"
              rows={[
                { label: "Eligibility", value: "Checked" },
                { label: "Contract", value: "Signed" },
                { label: "Documents", value: "Sent in 4 days" },
                { label: "Start date", value: "Confirmed" },
              ]}
              stat={{ value: 98, suffix: "%", label: "Files approved first time" }}
            />
          }
        />
        <FeatureUIRow
          reverse
          tone="night"
          eyebrow="For families"
          title="Move, stay or settle"
          body="We map the whole journey for your family, so you always know what comes next and when."
          cta={{ label: "Explore family services", href: "#" }}
          visual={
            <TimelineVisual
              title="Your route to settling"
              stages={[
                { label: "First stay", years: 3 },
                { label: "Extension", years: 2 },
              ]}
              total={5}
              note="Apply to settle after five years"
            />
          }
        />
      </div>
    </div>
  )
}
