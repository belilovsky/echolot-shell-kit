export const demoProjectionContract = {
  schemaVersion: "echolot-demo-snapshot-v1",
  location: "/demo/v1/{contour}/latest.json",
  browserRule: "Render only immutable public_demo projections; never fetch private Core APIs.",
  requiredFields: ["snapshot_id", "source_window_end", "method_version", "content_sha256", "public_evidence"],
};

export const shellReleaseContract = {
  requiredFiles: ["release.json", "qdev-project.json", "health.json"],
  containsCredentials: false,
  permitsWorkers: false,
  permitsCollectors: false,
};
