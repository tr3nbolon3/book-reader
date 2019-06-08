export default function getDisplayName(component) {
  return component.displayName || component.name || 'Component';
}
