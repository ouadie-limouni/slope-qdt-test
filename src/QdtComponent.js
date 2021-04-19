/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import { qdtEnigma, qdtCapabilityApp, qdtCompose, QdtViz } from 'qdt-components';

const config = {
    host: "sense-demo-staging.qlik.com",
    secure: true,
    port: 443,
    prefix: "",
    appId: "1a33f181-936e-4eab-bfcb-1a37da8d60e7",
    // appId: '372cbc85-f7fb-4db6-a620-9a5367845dce' // UNCOMMENT to check an example of working published app to "Everyone" stream
}

const engineApiAppPromise = qdtEnigma(config);
const capabilityApiAppPromise = qdtCapabilityApp(config);

function QdtComponent({ component, properties, options, appIndex }) {
    const elementRef = useRef(null);

    const init = async () => {
        let app = await engineApiAppPromise;
        if (appIndex === 2) {
            app = await capabilityApiAppPromise;
            QdtViz({
            element: elementRef.current,
            app,
            options,
            });
        } else {
            qdtCompose({
            element: elementRef.current,
            component,
            app,
            properties,
            options,
            });
        }
    };

    useEffect(() => {
        if (elementRef) {
            init();     
        }
    }, [init]);

    return (
        <div ref={elementRef} />
    );
}

export default QdtComponent;