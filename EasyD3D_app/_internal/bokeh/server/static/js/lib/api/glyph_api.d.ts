import type { HasProps } from "../core/has_props";
import type { Color, Arrayable } from "../core/types";
import type { Class } from "../core/class";
import type { Vector } from "../core/vectorization";
import type { VectorSpec, ScalarSpec, ColorSpec, UnitsSpec, Property } from "../core/properties";
import type { RenderLevel } from "../core/enums";
import type * as nd from "../core/util/ndarray";
import type { Glyph, GlyphRenderer, ColumnarDataSource, CDSView, CoordinateMapping } from "./models";
import { AnnularWedge, Annulus, Arc, Bezier, Block, Circle, Ellipse, HArea, HAreaStep, HBar, HSpan, HStrip, HexTile, Image, ImageRGBA, ImageStack, ImageURL, Line, MathMLGlyph as MathML, MultiLine, MultiPolygons, Patch, Patches, Quad, Quadratic, Ray, Rect, Scatter, Segment, Spline, Step, TeXGlyph as TeX, Text, VArea, VAreaStep, VBar, VSpan, VStrip, Wedge } from "../models/glyphs";
import type { Marker } from "../models/glyphs/marker";
export type NamesOf<T extends HasProps> = (Extract<keyof T["properties"], string>)[];
export type TypedGlyphRenderer<G extends Glyph> = GlyphRenderer & {
    data_source: ColumnarDataSource;
    glyph: G;
    hover_glyph: G | null;
    nonselection_glyph: G | "auto" | null;
    selection_glyph: G | "auto" | null;
    muted_glyph: G | "auto" | null;
};
export type ColorNDArray = nd.Uint32Array1d | nd.Uint8Array1d | nd.Uint8Array2d | nd.FloatArray2d | nd.ObjectNDArray;
export type VectorArg<T> = T | Arrayable<T> | Vector<T>;
export type ColorArg = VectorArg<Color | null> | ColorNDArray;
export type AlphaArg = VectorArg<number>;
export type ColorAlpha = {
    color: ColorArg;
    selection_color: ColorArg;
    nonselection_color: ColorArg;
    hover_color: ColorArg;
    muted_color: ColorArg;
    alpha: AlphaArg;
    selection_alpha: AlphaArg;
    nonselection_alpha: AlphaArg;
    hover_alpha: AlphaArg;
    muted_alpha: AlphaArg;
};
export type AuxHatch = {
    selection_hatch_color: ColorArg;
    selection_hatch_alpha: AlphaArg;
    nonselection_hatch_color: ColorArg;
    nonselection_hatch_alpha: AlphaArg;
    hover_hatch_color: ColorArg;
    hover_hatch_alpha: AlphaArg;
    muted_hatch_color: ColorArg;
    muted_hatch_alpha: AlphaArg;
};
export type AuxFill = {
    selection_fill_color: ColorArg;
    selection_fill_alpha: AlphaArg;
    nonselection_fill_color: ColorArg;
    nonselection_fill_alpha: AlphaArg;
    hover_fill_color: ColorArg;
    hover_fill_alpha: AlphaArg;
    muted_fill_color: ColorArg;
    muted_fill_alpha: AlphaArg;
};
export type AuxLine = {
    selection_line_color: ColorArg;
    selection_line_alpha: AlphaArg;
    nonselection_line_color: ColorArg;
    nonselection_line_alpha: AlphaArg;
    hover_line_color: ColorArg;
    hover_line_alpha: AlphaArg;
    muted_line_color: ColorArg;
    muted_line_alpha: AlphaArg;
};
export type AuxText = {
    selection_text_color: ColorArg;
    selection_text_alpha: AlphaArg;
    nonselection_text_color: ColorArg;
    nonselection_text_alpha: AlphaArg;
    hover_text_color: ColorArg;
    hover_text_alpha: AlphaArg;
    muted_text_color: ColorArg;
    muted_text_alpha: AlphaArg;
};
export type AuxGlyph = {
    source: ColumnarDataSource | ColumnarDataSource["data"];
    view: CDSView;
    legend_label: string;
    legend_field: string;
    legend_group: string;
    level: RenderLevel;
    name: string;
    visible: boolean;
    x_range_name: string;
    y_range_name: string;
    coordinates: CoordinateMapping | null;
};
export type ArgsOf<P> = {
    [K in keyof P]: (P[K] extends ColorSpec ? ColorArg : (P[K] extends VectorSpec<infer T, infer V> ? T | Arrayable<T> | V : (P[K] extends ScalarSpec<infer T, infer S> ? T | S : (P[K] extends Property<infer T> ? T : never))));
};
export type UnitsOf<P> = {
    [K in keyof P & string as `${K}_units`]: P[K] extends UnitsSpec<any, infer Units> ? Units : never;
};
export type GlyphArgs<P> = ArgsOf<P> & UnitsOf<P> & AuxGlyph & ColorAlpha;
export type AnnularWedgeArgs = GlyphArgs<AnnularWedge.Props> & AuxLine & AuxFill & AuxHatch;
export type AnnulusArgs = GlyphArgs<Annulus.Props> & AuxLine & AuxFill & AuxHatch;
export type ArcArgs = GlyphArgs<Arc.Props> & AuxLine;
export type BezierArgs = GlyphArgs<Bezier.Props> & AuxLine;
export type BlockArgs = GlyphArgs<Block.Props> & AuxLine & AuxFill & AuxHatch;
export type CircleArgs = GlyphArgs<Circle.Props> & AuxLine & AuxFill & AuxHatch;
export type EllipseArgs = GlyphArgs<Ellipse.Props> & AuxLine & AuxFill & AuxHatch;
export type HAreaArgs = GlyphArgs<HArea.Props> & AuxFill & AuxHatch;
export type HAreaStepArgs = GlyphArgs<HAreaStep.Props> & AuxFill & AuxHatch;
export type HBarArgs = GlyphArgs<HBar.Props> & AuxLine & AuxFill & AuxHatch;
export type HSpanArgs = GlyphArgs<HSpan.Props> & AuxLine;
export type HStripArgs = GlyphArgs<HStrip.Props> & AuxLine & AuxFill & AuxHatch;
export type HexTileArgs = GlyphArgs<HexTile.Props> & AuxLine & AuxFill & AuxHatch;
export type ImageArgs = GlyphArgs<Image.Props>;
export type ImageRGBAArgs = GlyphArgs<ImageRGBA.Props>;
export type ImageStackArgs = GlyphArgs<ImageStack.Props>;
export type ImageURLArgs = GlyphArgs<ImageURL.Props>;
export type LineArgs = GlyphArgs<Line.Props> & AuxLine;
export type MarkerArgs = GlyphArgs<Marker.Props> & AuxLine & AuxFill & AuxHatch;
export type MathMLArgs = GlyphArgs<MathML.Props> & AuxText;
export type MultiLineArgs = GlyphArgs<MultiLine.Props> & AuxLine;
export type MultiPolygonsArgs = GlyphArgs<MultiPolygons.Props> & AuxLine & AuxFill & AuxHatch;
export type PatchArgs = GlyphArgs<Patch.Props> & AuxLine & AuxFill & AuxHatch;
export type PatchesArgs = GlyphArgs<Patches.Props> & AuxLine & AuxFill & AuxHatch;
export type QuadArgs = GlyphArgs<Quad.Props> & AuxLine & AuxFill & AuxHatch;
export type QuadraticArgs = GlyphArgs<Quadratic.Props> & AuxLine;
export type RayArgs = GlyphArgs<Ray.Props> & AuxLine;
export type RectArgs = GlyphArgs<Rect.Props> & AuxLine & AuxFill & AuxHatch;
export type ScatterArgs = GlyphArgs<Scatter.Props> & AuxLine & AuxFill & AuxHatch;
export type SegmentArgs = GlyphArgs<Segment.Props> & AuxLine;
export type SplineArgs = GlyphArgs<Spline.Props> & AuxLine;
export type StepArgs = GlyphArgs<Step.Props> & AuxLine;
export type TeXArgs = GlyphArgs<TeX.Props> & AuxText;
export type TextArgs = GlyphArgs<Text.Props> & AuxText;
export type VAreaArgs = GlyphArgs<VArea.Props> & AuxFill & AuxHatch;
export type VAreaStepArgs = GlyphArgs<VAreaStep.Props> & AuxFill & AuxHatch;
export type VBarArgs = GlyphArgs<VBar.Props> & AuxLine & AuxFill & AuxHatch;
export type VSpanArgs = GlyphArgs<VSpan.Props> & AuxLine;
export type VStripArgs = GlyphArgs<VStrip.Props> & AuxLine & AuxFill & AuxHatch;
export type WedgeArgs = GlyphArgs<Wedge.Props> & AuxLine & AuxFill & AuxHatch;
export declare abstract class GlyphAPI {
    abstract _glyph<G extends Glyph>(cls: Class<G>, method: string, positional: NamesOf<G>, args: unknown[], overrides?: object): TypedGlyphRenderer<G>;
    annular_wedge(): TypedGlyphRenderer<AnnularWedge>;
    annular_wedge(args: Partial<AnnularWedgeArgs>): TypedGlyphRenderer<AnnularWedge>;
    annular_wedge(x: AnnularWedgeArgs["x"], y: AnnularWedgeArgs["y"], inner_radius: AnnularWedgeArgs["inner_radius"], outer_radius: AnnularWedgeArgs["outer_radius"], start_angle: AnnularWedgeArgs["start_angle"], end_angle: AnnularWedgeArgs["end_angle"], args?: Partial<AnnularWedgeArgs>): TypedGlyphRenderer<AnnularWedge>;
    annulus(): TypedGlyphRenderer<Annulus>;
    annulus(args: Partial<AnnulusArgs>): TypedGlyphRenderer<Annulus>;
    annulus(x: AnnulusArgs["x"], y: AnnulusArgs["y"], inner_radius: AnnulusArgs["inner_radius"], outer_radius: AnnulusArgs["outer_radius"], args?: Partial<AnnulusArgs>): TypedGlyphRenderer<Annulus>;
    arc(): TypedGlyphRenderer<Arc>;
    arc(args: Partial<ArcArgs>): TypedGlyphRenderer<Arc>;
    arc(x: ArcArgs["x"], y: ArcArgs["y"], radius: ArcArgs["radius"], start_angle: ArcArgs["start_angle"], end_angle: ArcArgs["end_angle"], args?: Partial<ArcArgs>): TypedGlyphRenderer<Arc>;
    bezier(): TypedGlyphRenderer<Bezier>;
    bezier(args: Partial<BezierArgs>): TypedGlyphRenderer<Bezier>;
    bezier(x0: BezierArgs["x0"], y0: BezierArgs["y0"], x1: BezierArgs["x1"], y1: BezierArgs["y1"], cx0: BezierArgs["cx0"], cy0: BezierArgs["cy0"], cx1: BezierArgs["cx1"], cy1: BezierArgs["cy1"], args?: Partial<BezierArgs>): TypedGlyphRenderer<Bezier>;
    block(): TypedGlyphRenderer<Block>;
    block(args: Partial<BlockArgs>): TypedGlyphRenderer<Block>;
    block(x: BlockArgs["x"], y: BlockArgs["y"], width: BlockArgs["width"], height: BlockArgs["height"], args?: Partial<BlockArgs>): TypedGlyphRenderer<Block>;
    circle(): TypedGlyphRenderer<Circle>;
    circle(args: Partial<CircleArgs>): TypedGlyphRenderer<Circle>;
    circle(x: CircleArgs["x"], y: CircleArgs["y"], radius: CircleArgs["radius"], args?: Partial<CircleArgs>): TypedGlyphRenderer<Circle>;
    ellipse(): TypedGlyphRenderer<Ellipse>;
    ellipse(args: Partial<EllipseArgs>): TypedGlyphRenderer<Ellipse>;
    ellipse(x: EllipseArgs["x"], y: EllipseArgs["y"], width: EllipseArgs["width"], height: EllipseArgs["height"], args?: Partial<EllipseArgs>): TypedGlyphRenderer<Ellipse>;
    harea(): TypedGlyphRenderer<HArea>;
    harea(args: Partial<HAreaArgs>): TypedGlyphRenderer<HArea>;
    harea(x1: HAreaArgs["x1"], x2: HAreaArgs["x2"], y: HAreaArgs["y"], args?: Partial<HAreaArgs>): TypedGlyphRenderer<HArea>;
    harea_step(): TypedGlyphRenderer<HAreaStep>;
    harea_step(args: Partial<HAreaStepArgs>): TypedGlyphRenderer<HAreaStep>;
    harea_step(x1: HAreaStepArgs["x1"], x2: HAreaStepArgs["x2"], y: HAreaStepArgs["y"], step_mode: HAreaStepArgs["step_mode"], args?: Partial<HAreaStepArgs>): TypedGlyphRenderer<HAreaStep>;
    hbar(): TypedGlyphRenderer<HBar>;
    hbar(args: Partial<HBarArgs>): TypedGlyphRenderer<HBar>;
    hbar(y: HBarArgs["y"], height: HBarArgs["height"], right: HBarArgs["right"], left: HBarArgs["left"], args?: Partial<HBarArgs>): TypedGlyphRenderer<HBar>;
    hspan(): TypedGlyphRenderer<HSpan>;
    hspan(args: Partial<HSpanArgs>): TypedGlyphRenderer<HSpan>;
    hspan(y: HSpanArgs["y"], args?: Partial<HSpanArgs>): TypedGlyphRenderer<HSpan>;
    hstrip(): TypedGlyphRenderer<HStrip>;
    hstrip(args: Partial<HStripArgs>): TypedGlyphRenderer<HStrip>;
    hstrip(y0: HStripArgs["y0"], y1: HStripArgs["y1"], args?: Partial<HStripArgs>): TypedGlyphRenderer<HStrip>;
    hex_tile(): TypedGlyphRenderer<HexTile>;
    hex_tile(args: Partial<HexTileArgs>): TypedGlyphRenderer<HexTile>;
    hex_tile(q: HexTileArgs["q"], r: HexTileArgs["r"], args?: Partial<HexTileArgs>): TypedGlyphRenderer<HexTile>;
    image(): TypedGlyphRenderer<Image>;
    image(args: Partial<ImageArgs>): TypedGlyphRenderer<Image>;
    image(image: ImageArgs["image"], x: ImageArgs["x"], y: ImageArgs["y"], dw: ImageArgs["dw"], dh: ImageArgs["dh"], args?: Partial<ImageArgs>): TypedGlyphRenderer<Image>;
    image_stack(): TypedGlyphRenderer<ImageStack>;
    image_stack(args: Partial<ImageStackArgs>): TypedGlyphRenderer<ImageStack>;
    image_stack(image: ImageStackArgs["image"], x: ImageStackArgs["x"], y: ImageStackArgs["y"], dw: ImageStackArgs["dw"], dh: ImageStackArgs["dh"], args?: Partial<ImageStackArgs>): TypedGlyphRenderer<ImageStack>;
    image_rgba(): TypedGlyphRenderer<ImageRGBA>;
    image_rgba(args: Partial<ImageRGBAArgs>): TypedGlyphRenderer<ImageRGBA>;
    image_rgba(image: ImageRGBAArgs["image"], x: ImageRGBAArgs["x"], y: ImageRGBAArgs["y"], dw: ImageRGBAArgs["dw"], dh: ImageRGBAArgs["dh"], args?: Partial<ImageRGBAArgs>): TypedGlyphRenderer<ImageRGBA>;
    image_url(): TypedGlyphRenderer<ImageURL>;
    image_url(args: Partial<ImageURLArgs>): TypedGlyphRenderer<ImageURL>;
    image_url(url: ImageURLArgs["url"], x: ImageURLArgs["x"], y: ImageURLArgs["y"], w: ImageURLArgs["w"], h: ImageURLArgs["h"], args?: Partial<ImageURLArgs>): TypedGlyphRenderer<ImageURL>;
    line(): TypedGlyphRenderer<Line>;
    line(args: Partial<LineArgs>): TypedGlyphRenderer<Line>;
    line(x: LineArgs["x"], y: LineArgs["y"], args?: Partial<LineArgs>): TypedGlyphRenderer<Line>;
    mathml(): TypedGlyphRenderer<MathML>;
    mathml(args: Partial<MathMLArgs>): TypedGlyphRenderer<MathML>;
    mathml(x: MathMLArgs["x"], y: MathMLArgs["y"], text: MathMLArgs["text"], args?: Partial<MathMLArgs>): TypedGlyphRenderer<MathML>;
    multi_line(): TypedGlyphRenderer<MultiLine>;
    multi_line(args: Partial<MultiLineArgs>): TypedGlyphRenderer<MultiLine>;
    multi_line(xs: MultiLineArgs["xs"], ys: MultiLineArgs["ys"], args?: Partial<MultiLineArgs>): TypedGlyphRenderer<MultiLine>;
    multi_polygons(): TypedGlyphRenderer<MultiPolygons>;
    multi_polygons(args: Partial<MultiPolygonsArgs>): TypedGlyphRenderer<MultiPolygons>;
    multi_polygons(xs: MultiPolygonsArgs["xs"], ys: MultiPolygonsArgs["ys"], args?: Partial<MultiPolygonsArgs>): TypedGlyphRenderer<MultiPolygons>;
    patch(): TypedGlyphRenderer<Patch>;
    patch(args: Partial<PatchArgs>): TypedGlyphRenderer<Patch>;
    patch(x: PatchArgs["x"], y: PatchArgs["y"], args?: Partial<PatchArgs>): TypedGlyphRenderer<Patch>;
    patches(): TypedGlyphRenderer<Patches>;
    patches(args: Partial<PatchesArgs>): TypedGlyphRenderer<Patches>;
    patches(xs: PatchesArgs["xs"], ys: PatchesArgs["ys"], args?: Partial<PatchesArgs>): TypedGlyphRenderer<Patches>;
    quad(): TypedGlyphRenderer<Quad>;
    quad(args: Partial<QuadArgs>): TypedGlyphRenderer<Quad>;
    quad(left: QuadArgs["left"], right: QuadArgs["right"], bottom: QuadArgs["bottom"], top: QuadArgs["top"], args?: Partial<QuadArgs>): TypedGlyphRenderer<Quad>;
    quadratic(): TypedGlyphRenderer<Quadratic>;
    quadratic(args: Partial<QuadraticArgs>): TypedGlyphRenderer<Quadratic>;
    quadratic(x0: QuadraticArgs["x0"], y0: QuadraticArgs["y0"], x1: QuadraticArgs["x1"], y1: QuadraticArgs["y1"], cx: QuadraticArgs["cx"], cy: QuadraticArgs["cy"], args?: Partial<QuadraticArgs>): TypedGlyphRenderer<Quadratic>;
    ray(): TypedGlyphRenderer<Ray>;
    ray(args: Partial<RayArgs>): TypedGlyphRenderer<Ray>;
    ray(x: RayArgs["x"], y: RayArgs["y"], length: RayArgs["length"], args?: Partial<RayArgs>): TypedGlyphRenderer<Ray>;
    rect(): TypedGlyphRenderer<Rect>;
    rect(args: Partial<RectArgs>): TypedGlyphRenderer<Rect>;
    rect(x: RectArgs["x"], y: RectArgs["y"], width: RectArgs["width"], height: RectArgs["height"], args?: Partial<RectArgs>): TypedGlyphRenderer<Rect>;
    segment(): TypedGlyphRenderer<Segment>;
    segment(args: Partial<SegmentArgs>): TypedGlyphRenderer<Segment>;
    segment(x0: SegmentArgs["x0"], y0: SegmentArgs["y0"], x1: SegmentArgs["x1"], y1: SegmentArgs["y1"], args?: Partial<SegmentArgs>): TypedGlyphRenderer<Segment>;
    spline(): TypedGlyphRenderer<Spline>;
    spline(args: Partial<SplineArgs>): TypedGlyphRenderer<Spline>;
    spline(x: SplineArgs["x"], y: SplineArgs["y"], args?: Partial<SplineArgs>): TypedGlyphRenderer<Spline>;
    step(): TypedGlyphRenderer<Step>;
    step(args: Partial<StepArgs>): TypedGlyphRenderer<Step>;
    step(x: StepArgs["x"], y: StepArgs["y"], mode: StepArgs["mode"], args?: Partial<StepArgs>): TypedGlyphRenderer<Step>;
    tex(): TypedGlyphRenderer<TeX>;
    tex(args: Partial<TeXArgs>): TypedGlyphRenderer<TeX>;
    tex(x: TeXArgs["x"], y: TeXArgs["y"], text: TeXArgs["text"], args?: Partial<TeXArgs>): TypedGlyphRenderer<TeX>;
    text(): TypedGlyphRenderer<Text>;
    text(args: Partial<TextArgs>): TypedGlyphRenderer<Text>;
    text(x: TextArgs["x"], y: TextArgs["y"], text: TextArgs["text"], args?: Partial<TextArgs>): TypedGlyphRenderer<Text>;
    varea(): TypedGlyphRenderer<VArea>;
    varea(args: Partial<VAreaArgs>): TypedGlyphRenderer<VArea>;
    varea(x: VAreaArgs["x"], y1: VAreaArgs["y1"], y2: VAreaArgs["y2"], args?: Partial<VAreaArgs>): TypedGlyphRenderer<VArea>;
    varea_step(): TypedGlyphRenderer<VAreaStep>;
    varea_step(args: Partial<VAreaStepArgs>): TypedGlyphRenderer<VAreaStep>;
    varea_step(x: VAreaStepArgs["x"], y1: VAreaStepArgs["y1"], y2: VAreaStepArgs["y2"], step_mode: VAreaStepArgs["step_mode"], args?: Partial<VAreaStepArgs>): TypedGlyphRenderer<VAreaStep>;
    vbar(): TypedGlyphRenderer<VBar>;
    vbar(args: Partial<VBarArgs>): TypedGlyphRenderer<VBar>;
    vbar(x: VBarArgs["x"], width: VBarArgs["width"], top: VBarArgs["top"], bottom: VBarArgs["bottom"], args?: Partial<VBarArgs>): TypedGlyphRenderer<VBar>;
    vspan(): TypedGlyphRenderer<VSpan>;
    vspan(args: Partial<VSpanArgs>): TypedGlyphRenderer<VSpan>;
    vspan(x: VSpanArgs["x"], args?: Partial<VSpanArgs>): TypedGlyphRenderer<VSpan>;
    vstrip(): TypedGlyphRenderer<VStrip>;
    vstrip(args: Partial<VStripArgs>): TypedGlyphRenderer<VStrip>;
    vstrip(x0: VStripArgs["x0"], x1: VStripArgs["x1"], args?: Partial<VStripArgs>): TypedGlyphRenderer<VStrip>;
    wedge(): TypedGlyphRenderer<Wedge>;
    wedge(args: Partial<WedgeArgs>): TypedGlyphRenderer<Wedge>;
    wedge(x: WedgeArgs["x"], y: WedgeArgs["y"], radius: WedgeArgs["radius"], start_angle: WedgeArgs["start_angle"], end_angle: WedgeArgs["end_angle"], args?: Partial<WedgeArgs>): TypedGlyphRenderer<Wedge>;
    private _scatter;
    scatter(): TypedGlyphRenderer<Scatter>;
    scatter(args: Partial<ScatterArgs>): TypedGlyphRenderer<Scatter>;
    scatter(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<ScatterArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ asterisk(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ asterisk(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ asterisk(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_cross(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_cross(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_cross(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_dot(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_dot(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_dot(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_x(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_x(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_x(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_y(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_y(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ circle_y(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ cross(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ cross(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ cross(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ dash(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ dash(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ dash(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond_cross(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond_cross(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond_cross(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond_dot(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond_dot(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ diamond_dot(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ dot(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ dot(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ dot(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ hex(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ hex(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ hex(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ hex_dot(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ hex_dot(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ hex_dot(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ inverted_triangle(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ inverted_triangle(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ inverted_triangle(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ plus(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ plus(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ plus(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_cross(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_cross(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_cross(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_dot(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_dot(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_dot(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_pin(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_pin(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_pin(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_x(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_x(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ square_x(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ star(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ star(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ star(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ star_dot(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ star_dot(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ star_dot(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle_dot(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle_dot(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle_dot(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle_pin(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle_pin(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ triangle_pin(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ x(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ x(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ x(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ y(): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ y(args: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
    /** @deprecated */ y(x: MarkerArgs["x"], y: MarkerArgs["y"], args?: Partial<MarkerArgs>): TypedGlyphRenderer<Scatter>;
}
//# sourceMappingURL=glyph_api.d.ts.map