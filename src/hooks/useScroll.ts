import { useMemo, useLayoutEffect, useState, useCallback } from 'react';

const useScroll = () => {
    const [currPos, setCurrPos] = useState<any>({
        x: undefined,
        y: undefined,
    });

    const [prevPos, setPrevPos] = useState<any>({
        x: undefined,
        y: undefined,
    });
    const [node, setNode] = useState<HTMLElement | null>(null);
}