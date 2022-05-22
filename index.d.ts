import React from "react";
import { ImageStyle, ViewStyle } from "react-native";

declare module 'react-native-image-slider-banner' {
    export type DataType = {img:string|number};
    interface ImageSliderProps {
        /**
        * Set array of images path- these paths can contain http url link or local images path using require('./pathOfImage')
        */
        data: DataType[];
        /**
        * its define whats type image urls you provide if its true it means you provide local images path
        * @default: false
        */
        localImg?: boolean;
        /**
        * if its true its shows a header on slider
        * @default false
        */
        showHeader?: boolean;
        /**
        * for displaying right component in header
        * @default null
        */
        headerRightComponent?: React.ReactNode;
        /**
        * for displaying left component in header
        * @default null
        */
        headerLeftComponent?: React.ReactNode;
        /**
        * for displaying center component in header
        * @default null
        */
        headerCenterComponent?: ReactNode;
        /**
        * for change style of header
        * @default {}
        */
        headerStyle?: ViewStyle;
        /**
        * for change style of previewImageContainer
        * @default {}
        */
        previewImageContainerStyle?: ViewStyle;
        /**
        * for change style of previewImage
        * @default {}
        */
        previewImageStyle?: ImageStyle;
        /**
        * for change style of caroselImageContainerStyle
        * @default {}
        */
        caroselImageContainerStyle?: ViewStyle;
        /**
        * for change style of caroselImageStyle
        * @default {}
        */
        caroselImageStyle?: ImageStyle;
        /**
        * for auto scrolling
        * @default false
        */
        autoPlay?: boolean;
        /**
        * timeinterval for changing slider
        * @default 2000
        */
        timer?: number;
        /**
        * for Showing indicator
        * @default false
        */
        showIndicator?: boolean;
        /**
        * for change style of activeIndicator
        * @default {}
        */
        activeIndicatorStyle?: ViewStyle;
        /**
        * for change style of inActiveIndicatorStyle
        * @default {}
        */
        inActiveIndicatorStyle?: ViewStyle;
        /**
        * for change style of indicatorContainerStyle
        * @default {}
        */
        indicatorContainerStyle?: ViewStyle;
        /**
        * when item changed its give item data in parameter
        * @default (itemData) => {}
        */
        onItemChanged?:(itemData: DataType) => void;
        /**
        * when click on any item its give item data in parameter and when onClick Present so slider not show IMAGE PREVIEW on Click
        * @default (item, index) => {},
        */
        onClick?:(item: DataType, index: number) => void;
        /**
        * Image Preview cross icon color
        * @default #000
        */
        closeIconColor?: string;
        /**
        * Image Preview Background Blur Radius
        * @default 50
        */
        blurRadius?: number;
    }
    export class ImageSlider extends React.Component<ImageSliderProps> { }
}
