export default function Banner(props) {
    return (
        <>
            <section class="w3l-about-breadcrumb">
                <div class="breadcrumb-bg breadcrumb-bg-about py-sm-5 pt-5 pb-4">
                    <div class="container pt-lg-5 pt-md-3 py-lg-4 pb-md-3">
                        <h2 class="title">{props.pageName}</h2>
                        <ul class="breadcrumbs-custom-path mt-2">
                            <li><a href="index.html">Home</a></li>
                            <li class="mx-2">/ </li>
                            <li class="active">{props.pageName}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
}





