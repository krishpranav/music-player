import { useRef, useMemo, useLayoutEffect, useState, useCallback } from 'react';

const useResize = () => {
    const [size, setSize] = useState<any>({
        width:  undefined,
        height: undefined,
    });
}