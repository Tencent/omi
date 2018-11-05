/**
 * Created by jf on 15/10/27.
 */
import version from './version';

//0.4.x components
import {Button, ButtonArea, PreviewButton} from './components/button/index';
import {Cells, CellsTitle, CellsTips, Cell, CellHeader, CellBody, CellFooter} from './components/cell/index';
import Mask from './components/mask/index';
import {Form, FormCell, TextArea, Input, Switch, Radio, Slider, Checkbox, Select, Uploader, VCode, Agreement, Preview, PreviewHeader, PreviewBody, PreviewFooter, PreviewItem} from './components/form/index';
import Label from './components/label/index';
import Toast from './components/toast/index';
import Progress from './components/progress/index';
import ActionSheet from './components/actionsheet/index';
import Dialog from './components/dialog/index';
import Msg from './components/msg/index';
import Article from './components/article/index';
import Icon from './components/icon/index';
import {Grids, Grid, GridIcon, GridLabel} from './components/grid/index';
import {Panel, PanelHeader, PanelBody, PanelFooter} from './components/panel/index';
import {MediaBox, MediaBoxHeader, MediaBoxBody, MediaBoxTitle, MediaBoxDescription, MediaBoxInfo, MediaBoxInfoMeta} from './components/mediabox/index';
import {Tab, TabBody, TabBodyItem, NavBar, NavBarItem, TabBar, TabBarItem, TabBarIcon, TabBarLabel} from './components/tab/index';
import SearchBar from './components/searchbar/index';
//1.0.0 components
import {Flex, FlexItem} from './components/flex/index';
import Toptips from './components/toptips';
import {Gallery, GalleryDelete} from './components/gallery';
import {Footer, FooterText, FooterLinks, FooterLink} from './components/footer';
import LoadMore from './components/loadmore';
import { Picker, CityPicker, PickerGroup } from './components/picker';
import Badge from './components/badge';
//non standard
import { Popup, PopupHeader } from './components/popup';
import PullToRefresh from './components/ptr';
import InfiniteLoader from './components/infiniteloader';
import Swiper from './components/swiper';
import Page from './components/page';

export default {
    version,

    //0.4.x
    Button,
    ButtonArea,
    Cells,
    CellsTitle,
    CellsTips,
    Cell,
    CellHeader,
    CellBody,
    CellFooter,
    Mask,
    Form,
    FormCell,
    Radio,
    Checkbox,
    Input,
    TextArea,
    Switch,
    Select,
    Uploader,
    Label,
    Toast,
    Progress,
    ActionSheet,
    Dialog,
    Msg,
    Article,
    Icon,
    Grids,
    Grid,
    GridIcon,
    GridLabel,
    Panel,
    PanelHeader,
    PanelBody,
    PanelFooter,
    MediaBox,
    MediaBoxHeader,
    MediaBoxBody,
    MediaBoxTitle,
    MediaBoxDescription,
    MediaBoxInfo,
    MediaBoxInfoMeta,
    NavBar,
    NavBarItem,
    Tab,
    TabBody,
    TabBodyItem,
    TabBar,
    TabBarIcon,
    TabBarItem,
    TabBarLabel,
    SearchBar,

    //1.0.0
    Flex,
    FlexItem,
    VCode,
    Agreement,
    Toptips,
    Gallery,
    GalleryDelete,
    Footer,
    FooterText,
    FooterLinks,
    FooterLink,
    LoadMore,
    Preview,
    PreviewHeader,
    PreviewBody,
    PreviewFooter,
    PreviewItem,
    PreviewButton,
    Picker,
    PickerGroup,
    CityPicker,
    Slider,
    Badge,

    //non-standard
    Popup,
    PopupHeader,
    PullToRefresh,
    InfiniteLoader,
    Swiper,
    Page
};
