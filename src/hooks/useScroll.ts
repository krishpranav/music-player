import { useMemo, useLayoutEffect, useState, useCallback } from 'react';

const useScroll = () => {
    const [currPos, setCurrPos] = useState<any>({
        x: undefined,
        y: undefined,
    });
}