
export interface gridStyle {
    left: string | number | position | "10%";
    right: string | number | position | '10%';
    top: string | number | position | "60";
    bottom: string | number | position | '60';
    width: string | number | widthAheightOpt | widthAheightOpt.auto;
    height: string | number | widthAheightOpt | widthAheightOpt.auto;
}

enum position {
    left = 'left',
    right = 'right',
    top = 'top',
    bottom = 'bottom'
}
enum widthAheightOpt {
    inherit = 'inherit',
    initial = 'initial',
    unset = 'unset',
    auto = 'auto'
}