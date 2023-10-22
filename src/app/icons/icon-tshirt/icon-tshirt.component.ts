import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-icon-tshirt',
    templateUrl: './icon-tshirt.component.html',
    styleUrls: ['./icon-tshirt.component.scss']
})

export class IconTshirtComponent implements OnInit {
    public sm: number = 16
    public md: number = 24
    public lg: number = 40

    public width!: string
    public height!: string

    public ngOnInit(): void {
        this.initSizing()
    }

    protected initSizing(): void {
        this.width = `${ this.lg }px`
        this.height = `${ this.lg }px`
    }
}
