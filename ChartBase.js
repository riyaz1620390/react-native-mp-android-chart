import {
  PropTypes,
  View
} from 'react-native';

const iface = {
  propTypes: {
    ...View.propTypes,

    animation: PropTypes.shape({
      durationX: PropTypes.number,
      durationY: PropTypes.number,
      easingX: PropTypes.string,
      easingY: PropTypes.string
    }),

    legend: PropTypes.shape({
      enabled: PropTypes.bool,

      textColor: PropTypes.string,
      textSize: PropTypes.number,
      fontFamily: PropTypes.string,
      fontStyle: PropTypes.number,

      wordWrapEnabled: PropTypes.bool,
      maxSizePercent: PropTypes.number,

      position: PropTypes.string,
      form: PropTypes.string,
      formSize: PropTypes.number,
      xEntrySpace: PropTypes.number,
      yEntrySpace: PropTypes.number,
      formToTextSpace: PropTypes.number,

      custom: PropTypes.shape({
        colors: PropTypes.arrayOf(PropTypes.string),
        labels: PropTypes.arrayOf(PropTypes.string)
      })
    }),

    description: PropTypes.string
  }
};

export default iface;
