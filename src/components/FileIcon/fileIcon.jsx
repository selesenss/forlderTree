function FileIcon(type) {
  if (type === "folder") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M10 4l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h6z" fill="currentColor" opacity="0.9" />
      </svg>
    );
  }

  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 2h9l3 3v17a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" fill="currentColor" opacity="0.9" />
      <path d="M15 2v5h5" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.7" />
    </svg>
  );
}

export default FileIcon
