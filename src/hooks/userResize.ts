import { useRef, useMemo, useLayoutEffect, useState, useCallback } from 'react';

const useResize = () => {
    const [size, setSize] = useState<any>({
        width:  undefined,
        height: undefined,
    });
    const [node, setNode] = useState(null);

    const observer = useRef<any>(null);

    const disconnect = useCallback(() => {
        const { current } = observer;
        current && current!.disconnect();
    }, []);
}