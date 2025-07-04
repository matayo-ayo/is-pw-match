const React = require("react");
const { matchPercent } = require(".");

/**
 * React component to display password match percentage
 * @param {object} props - Component props
 * @param {string} props.str1 - First string
 * @param {string} props.str2 - Second string
 * @param {object} [props.options] - Match options
 * @param {function} [props.children] - Render prop function
 * @param {React.ElementType} [props.as] - Wrapper element type
 * @returns {React.Element}
 */
function PasswordMatcher({
  str1,
  str2,
  options,
  children,
  as: Component = "div",
}) {
  const percent = matchPercent(str1, str2, options);

  return children ? (
    children(percent)
  ) : (
    <Component>Match: {percent}%</Component>
  );
}

module.exports = PasswordMatcher;
