import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React from 'react';

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}
  
const ElevationScroll = (props: Props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
export default ElevationScroll;