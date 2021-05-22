/* eslint-disable @typescript-eslint/no-explicit-any */
import { colorPickerPalette } from '@/data/colors';
import resetMap from '@/lib/resetMap';
import uploadConfig from '@/lib/uploadConfig';
import { mapAtom } from '@/store/map.store';
import { LegendData, MapData, MapStoreType } from '@/typings/map.store';
import { Tabs } from '@geist-ui/react';
import { Edit, Type, Upload } from '@geist-ui/react-icons';
import { useAtom } from 'jotai';
import React from 'react';
import EditControls from './Controls/EditControls';
import ExportControls from './Controls/ExportControls';

interface Props {
    mapId: string;
    stateCodes: { [key: string]: string };
}

const ControlContainer: React.FC<Props> = ({ mapId, stateCodes }) => {
    const [map, setMap] = useAtom<MapStoreType>(mapAtom);
    const handleAttrChange = (v: string, a: string) => {
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            [a]: v
        }));
    };
    const randomiseData = () => {
        const colorIdx = Math.floor(Math.random() * colorPickerPalette.length);
        const legendData: LegendData[] = [];
        colorPickerPalette[colorIdx].forEach((t, i) =>
            legendData.push({ fill: t, text: `${i * 10}`, hide: false })
        );
        const mapData: MapData[] = [];
        Object.keys(stateCodes).forEach((m) => {
            const rand = Math.floor(Math.random() * 10);
            mapData.push({
                fill: colorPickerPalette[colorIdx][rand],
                code: m,
                hide: false
            });
        });
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            mapData,
            legendData
        }));
    };
    const toggleHideLegend = (b: any) => {
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            hideLegend: b
        }));
    };
    const smoothGradient = (v: any) => {
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            legendSmoothGradient: v
        }));
    };
    const refreshMap = () => {
        resetMap(map.mapData, map.defaultFillColor);
        // @ts-ignore
        setMap((st: MapStoreType) => ({
            ...st,
            legendData: [],
            mapData: []
        }));
    };
    const uploadDataConfig = (e: any) => {
        // @ts-ignore
        uploadConfig(
            // @ts-ignore
            e.target.files[0],
            setMap,
            // @ts-ignore
            map.defaultFillColors
        );
    };
    return (
        <div>
            <div className="control-container">
                <div className="control-box">
                    <EditControls
                        map={map}
                        handleAttrChange={handleAttrChange}
                        toggleHideLegend={toggleHideLegend}
                        smoothGradient={smoothGradient}
                        randomiseData={randomiseData}
                        refreshMap={refreshMap}
                    />
                </div>
                <div className="control-box">
                    <EditControls
                        map={map}
                        handleAttrChange={handleAttrChange}
                        toggleHideLegend={toggleHideLegend}
                        smoothGradient={smoothGradient}
                        randomiseData={randomiseData}
                        refreshMap={refreshMap}
                    />
                </div>
                <div className="control-box">
                    <ExportControls map={map} mapId={mapId} uploadDataConfig={uploadDataConfig} />
                </div>
            </div>
            <div className="control-container-tabs">
                <Tabs initialValue="1" hideDivider>
                    <Tabs.Item
                        label={
                            <>
                                <Edit /> Edit{' '}
                            </>
                        }
                        value="1">
                        <EditControls
                            map={map}
                            handleAttrChange={handleAttrChange}
                            toggleHideLegend={toggleHideLegend}
                            smoothGradient={smoothGradient}
                            randomiseData={randomiseData}
                            refreshMap={refreshMap}
                        />
                    </Tabs.Item>
                    <Tabs.Item
                        label={
                            <>
                                <Type /> Label{' '}
                            </>
                        }
                        value="2">
                        <EditControls
                            map={map}
                            handleAttrChange={handleAttrChange}
                            toggleHideLegend={toggleHideLegend}
                            smoothGradient={smoothGradient}
                            randomiseData={randomiseData}
                            refreshMap={refreshMap}
                        />
                    </Tabs.Item>
                    <Tabs.Item
                        label={
                            <>
                                <Upload /> Export{' '}
                            </>
                        }
                        value="3">
                        <div className="control-box">
                            <ExportControls
                                map={map}
                                mapId={mapId}
                                uploadDataConfig={uploadDataConfig}
                            />
                        </div>
                    </Tabs.Item>
                </Tabs>
            </div>
            <style jsx>{`
                .control-container {
                    padding-top: 30px;
                    display: flex;
                    justify-content: space-between;
                }
                .control-container-tabs {
                    display: none;
                    width: 320px;
                    margin-right: auto;
                    margin-left: auto;
                }
                .control-box {
                }
                @media screen and (max-width: 800px) {
                    .control-container {
                        display: none;
                    }
                    .control-container-tabs {
                        padding-top: 30px;
                        display: block;
                    }
                }
            `}</style>
        </div>
    );
};

export default ControlContainer;
