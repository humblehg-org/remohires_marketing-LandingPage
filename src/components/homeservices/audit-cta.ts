/** Every "Get Free Audit" entry point dispatches this instead of holding its
 * own copy of the open/close state — <AuditModal> is the only thing that
 * listens. */
export const OPEN_AUDIT_MODAL_EVENT = "homeservices:open-audit-modal";

export function openAuditModal() {
  window.dispatchEvent(new Event(OPEN_AUDIT_MODAL_EVENT));
}
