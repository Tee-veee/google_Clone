function UserAvatar({ url, className }) {
  return (
    <img
      loading="lazy"
      src={url}
      alt="Profile picture"
      className={`h-12 rounded-full cursor-pointer hover:scale-[1.03] hover:transition-all hover:shadow-lg ${className}`}
    />
  );
}

export default UserAvatar;
